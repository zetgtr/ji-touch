import { panel_editor_fucken } from "./panel_editor.js";
import { tinymce_param } from "./tinymce.js";
// import da from "air-datepicker/locale/da";

window.panelEditor = panel_editor_fucken();




((w, d) => {
  function findGetParameter(parameterName) {
    var result = null,
      tmp = [];
    location.search
      .substr(1)
      .split("&")
      .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
    return result;
  }

  function makeid() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 3; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    text += Math.floor(Math.random() * (99999 - 10000)) + 10000;
    return text;
  }

  function clearPanelData(data, global_empty = true, extra_data = false) {
    let empty_array = true;

    let clear = {};
    let frame = {};
    let clear_array = '{"type":["text"],"header":[""],"data":[],"arrayType":"","table":"none","where":"","order":"","limit":"10","query":"","dbSet":"default","allCol":["none"],"col":["none"]}';

    let col_count = data.type.length;
    let row_count = data.data.length;

    clear.type = frame.type = data.type;
    clear.header = frame.header = data.header;
    clear.data = [];
    frame.data = [];

    if (extra_data) {
      frame.arrayType = data.arrayType ? data.arrayType : "array";
      frame.table = data.table ? data.table : "none";
      frame.where = data.where ? data.where : "";
      frame.order = data.order ? data.order : "";
      frame.limit = data.limit ? data.limit : "10";
      frame.query = data.query ? data.query : "";
      frame.dbSet = data.dbSet ? data.dbSet : "default";
      frame.allCol = data.allCol ? data.allCol : ["none"];
      frame.col = data.col ? data.col : ["none"];

      clear.arrayType = data.arrayType ? data.arrayType : "array";
      clear.table = data.table ? data.table : "none";
      clear.where = data.where ? data.where : "";
      clear.order = data.order ? data.order : "";
      clear.limit = data.limit ? data.limit : "10";
      clear.query = data.query ? data.query : "";
      clear.dbSet = data.dbSet ? data.dbSet : "default";
      clear.allCol = data.allCol ? data.allCol : ["none"];
      clear.col = data.col ? data.col : ["none"];

      for (const key in data) {
        if (!clear.hasOwnProperty(key)) clear[key] = frame[key] = data[key];
      }
    }

    let row_frame_hash = [];
    for (let i = 0, array_type = ['array', 'arrayDB']; i < array_type.length; i++) {
      let clear_row_hash = [];
      data.type.map((val) => {
        if (val == 'array') {
          let clear_array_template = JSON.parse(clear_array);
          clear_array_template['arrayType'] = array_type[i];
          clear_row_hash.push(clear_array_template);
        } else clear_row_hash.push('');
      });
      row_frame_hash.push(JSON.stringify(clear_row_hash));
    }

    for (let j = 0; j < row_count; j++) {
      let row = [];
      let inject_row = false;

      let row_frame = [];
      let inject_row_frame = false;

      let local_empty_array = null;

      for (let i = 0; i < col_count; i++) {
        let ceil = data.data[j][i];

        switch (data.type[i]) {
          case "array":
            let ceil_frame;
            [ceil, ceil_frame, global_empty, local_empty_array] =
              clearPanelData(ceil, global_empty, true);

            row[i] = ceil;
            if (!inject_row) inject_row = true;

            row_frame[i] = ceil_frame;
            if (!inject_row_frame) inject_row_frame = true;

            break;
          case "text":
          case "img":
          case "textarea":
          case "key":
            row[i] = ceil.trim();
            if (!inject_row && row[i] != "") inject_row = true;

            row_frame[i] = "";

            if (empty_array && row[i] != "") empty_array = false;

            if (global_empty && row[i] != "") global_empty = false;

            break;
          default:
            break;
        }
      }

      if (local_empty_array === null) {
        if (inject_row) clear.data.push(row);
        if (inject_row_frame) frame.data.push(row_frame);
      } else {
        if (local_empty_array) {
          let row_hash_i = JSON.stringify(row);
          if (row_frame_hash.indexOf(row_hash_i) < 0 && inject_row)
            clear.data.push(row);
        } else {
          if (inject_row) clear.data.push(row);
        }

        let row_frame_hash_i = JSON.stringify(row_frame);

        if (row_frame_hash.indexOf(row_frame_hash_i) < 0) {
          if (inject_row_frame) frame.data.push(row_frame);
          row_frame_hash.push(row_frame_hash_i);
        }
      }
    }

    return [clear, frame, global_empty, empty_array];
  }

  const sortable_settings = {
    group: {
      name: "nested",
      put: function (to, from, el) {
        return !el.classList.contains("list-group-item-section");
      },
    },
    ghostClass: "gost",
    animation: 150,
    fallbackOnBody: true,
    swapThreshold: 0.65,
    handle: ".btn-grab",
    dataIdAttr: "data-id",
    emptyInsertThreshold: 0,
    multiDrag: true,
    selectedClass: "selected",
    // forceFallback: true
  };

  class ModalWindow {
    state = false;
    modal_template = d.getElementById("datahub_modal");
    modal_node;
    $modal;
    button_extends = {};

    save_modal = () => { };
    close_modal = () => { };
    open_modal = () => { };
    opened_modal = () => { };

    init(param) {
      this.getModalNode(param.title);
      this.insertNodeBody(param.body);
      this.setModalNode();
      this.state = true;
    }

    destroy() {
      this.closeModal();
    }

    setModalNode() {
      d.body.appendChild(this.modal_node);
      return this;
    }

    openModal() {
        this.$modal = $(this.modal_node)
            .on("show.bs.modal", () => {
                this.open_modal(this);
            })
            .on("shown.bs.modal", () => {
                this.opened_modal(this);
            })
            .on("hide.bs.modal", () => {
                this.close_modal(this);
                this.$modal.remove();
            })
            .modal();

// Explicitly show the modal
        this.$modal.modal("show");
      console.log(this.$modal.modal())
    }

    saveModal() {
      this.save_modal(this);
      this.closeModal();
    }

    addModalClass(class_name) {
      this.modal_node.className += ` ${class_name}`;
    }

    closeModal() {
      this.$modal.modal("hide");
    }

    getModalNode(title = "") {
      let node = this.modal_template.content.children[0].cloneNode(true);

      this.node_button_extends = node.querySelector(".buttons-extends");
      node.classList.add("modal-pgcreator");
      node.querySelector(".modal-title").innerText = title;
      node.querySelector(".modal-save").onclick = this.saveModal.bind(this);
      this.modal_node = node;
      return node;
    }

    insertNodeBody(el) {
      this.modal_node.querySelector(".modal-body").appendChild(el);
      return this;
    }

    saveToggle() {
      let save = this.modal_node.querySelector(".modal-save");
      save.classList.toggle("d-none");
    }

    addExtendButton(param) {
      if (this.button_extends.hasOwnProperty(param.id))
        return this.button_extends[param.id];

      let node = d.createElement("button");
      node.setAttribute("type", "button");
      node.className = "btn btn-sm";
      node.classList.add(`btn-${param.type}`);
      node.innerText = param.name;
      node.onclick = param.fn; /* .bind({...param.context},2); */
      param.node = node;
      this.node_button_extends.append(node);

      if (param.loader) {
        let loader = d.createElement("span");
        loader.className = "spinner-grow spinner-grow-sm";
        loader.setAttribute("role", "status");
        loader.setAttribute("aria-hidden", "true");
        node.appendChild(loader);
      }

      this.button_extends[param.id] = param;

      return param;
    }

    removeExtendButton(id) {
      if (this.button_extends.hasOwnProperty(id)) {
        let ext = this.button_extends[id];
        ext.node.remove();
        delete this.button_extends[id];
      }
    }
  }

  class DataPanel {
    type = "panel";
    state = false;
    display = true;
    anchor = false;
    content = {
      work: "",
      safe: "",
      frame: "",
    };
    Editor;
    template = d.getElementById("datahub_panel");
    title;

    data = [];
    parent;
    node;
    line;
    dataHub;
    id;
    safe_id = false;
    safe_id_panel = false;
    safe_mod = false;
    empty = true;

    larvae = {};
    larvae_sel = {
      data: {},
      length: 0,
      clear: function (id) {
        if (Object.hasOwnProperty.call(this.data, id)) delete this.data[id];
      },
      clearAll: function () {
        for (const id in this.data) {
          if (Object.hasOwnProperty.call(this.data, id)) delete this.data[id];
        }
      },
    };

    shield = {
      warn: undefined,
    };

    constructor(data = null) {
      if (data) this.setOutData(data);

      this.id = makeid();
      this.getPanelNode();

    }

    destroy(all) {
      if (this.safe_id) {
        if (!(this.type in this.dataHub.removelist))
          this.dataHub.removelist[this.type] = [];
        this.dataHub.removelist[this.type].push(this.safe_id);
      }

      this.dataHub.removeInAxis.call(this);
      this.node.remove();
    }

    /******************************************************************* */

    setDataPanel(data){
        let context = this;
        data.forEach(el=>{
            context.data[el.id] = el.data
        })
    }

    getPanelsList(fn = {}) {
      const url = $('#panel_all_url').val();
      let data = new FormData();

      if (fn.hasOwnProperty("begin")) fn.begin();
        console.log(url);
        let context = this
        $.ajax({
            url: url,
            type: "POST",
            success(data){
                if(data.status){
                    try {
                        let list_panels = data.content;
                        console.log(list_panels)
                        context.setPanelList(list_panels);
                        context.setDataPanel(list_panels);
                        if (fn.hasOwnProperty("sucscess")) fn.sucscess();
                    } catch (_) {
                        console.log(_);
                        alert("ERR-163: Не удаётся загрузить список панелей!");
                    }
                }
            }
        })

        // fetch(url, {
        //     method: "POST",
        //     body: data,
        // })
        // .then((response) => {
        //     console.log(response)
        //   if (response.status === 200) {
        //     return response.text();
        //   } else {
        //     throw new Error("ERR-167: Ошибка соединения с сервером!");
        //   }
        // })
        // .then(
        //   (result) => {
        //
        //   },
        //   (err) => {
        //     if (fn.hasOwnProperty("failure")) fn.failure();
        //     alert(err);
        //   }
        // );
    }

    getPanelData(id, fn = {}) {
      const url = $('#panel_all_url').val();
      let data = new FormData();
      data.append("id", id);

      if (fn.hasOwnProperty("begin")) fn.begin();

        console.log(data)
        this.larvae[id].content = this.data[id];

        if (fn.hasOwnProperty("sucscess")) fn.sucscess();
      // fetch(url, {
      //   method: "POST",
      //   body: data,
      // })
      //   .then((response) => {
      //     if (response.status === 200) {
      //       return response.text();
      //     } else {
      //       throw new Error("ERR-167: Ошибка соединения с сервером!");
      //     }
      //   })
      //   .then(
      //     (result) => {
      //       try {
      //         let data = JSON.parse(result).content;
      //
      //         this.larvae[id].content = data;
      //         if (fn.hasOwnProperty("sucscess")) fn.sucscess();
      //       } catch (_) {
      //         console.log(_);
      //         if (fn.hasOwnProperty("failure")) fn.failure();
      //
      //         alert("ERR-274: Данные панели повреждены!");
      //       }
      //     },
      //     (err) => {
      //       if (fn.hasOwnProperty("failure")) fn.failure();
      //       alert(err);
      //     }
      //   );
    }

    openSelectorByModal(modalWindow) {
      return new Promise((resolve, reject) => {
        modalWindow.close_modal = (modalWindow) => {
          reject();
        };
        modalWindow.saveToggle();

        let reload = modalWindow.addExtendButton({
          id: "reload",
          name: "Обновить",
          type: "info",
          loader: true,
          fn: this.getPanelsList.bind(this, {
            begin: () => {
              reload.node.disabled = true;
            },
            sucscess: () => {
              reload.node.disabled = false;
            },
          }),
        });

        let add;
        this.larvae_sel.data = new Proxy(this.larvae_sel.data, {
          deleteProperty: (target, prop) => {
            this.larvae_sel.length--;
            if (!this.larvae_sel.length) modalWindow.removeExtendButton("add");
            delete target[prop];
            return true;
          },
          set: (target, prop, val, receiver) => {
            if (!this.larvae_sel.length)
              add = modalWindow.addExtendButton({
                id: "add",
                name: "Добавить",
                type: "primary",
                loader: true,
                fn: () => {
                  modalWindow.close_modal = (modalWindow) => {
                    resolve(this.larvae_sel.data);
                  };
                  modalWindow.saveModal();
                },
              });

            if (!this.larvae[prop].hasOwnProperty("content")) {
              this.larvae[prop];

              this.getPanelData(prop, {
                begin: () => {
                  add.node.disabled = true;
                },
                sucscess: () => {
                  add.node.disabled = false;
                },
              });
            }

            this.larvae_sel.length++;
            return Reflect.set(target, prop, val, receiver);
          },
        });

        this.getPanelsList({
          sucscess: () => {
              console.log(213123123)
            modalWindow.openModal();
          },
          failure: () => {
            reject();
          },
        });
      });
    }

    openEditorByModal(modalWindow, content) {
      let data = JSON.parse(content);
      tinymce_param.target = modalWindow.modal_node.querySelector("#tina_panel");
      tinymce_param.init_instance_callback = (editor) => (this.Editor = editor);
      return new Promise((resolve, reject) => {
        let clear = modalWindow.addExtendButton({
          id: "clear",
          name: "Очистить",
          type: "info",
          fn: function () {
            this.inject_panel.textContent = "";
            panelEditor(JSON.parse(this.content.frame), this.safe_id_panel);
          }.bind(this),
        });

        /* let repair = modalWindow.addExtendButton({
            id: 'repair',
            name: 'Восстановить',
            type: 'info',
            fn: function () {
                this.inject_panel.textContent = '';
                panelEditor(JSON.parse(this.content.safe), this.safe_id);
            }.bind(this)
        }); */

        modalWindow.save_modal = (modalWindow) => {
          let all_table_array = getAllTableArray();
          let joke = JSON.stringify(renamenewline(all_table_array));

          this.content.work = joke;
        };

        modalWindow.close_modal = (modalWindow) => {
          this.Editor.destroy();
          resolve();
        };

        modalWindow.open_modal = (modalWindow) => {
          panelEditor(data, this.safe_id);
          tinymce.init(tinymce_param);
          modalWindow.addModalClass("pgcr__modal pgcr__modal_panel");
        };

        modalWindow.openModal();
      });
    }

    getNodeForModal() {
      let el = document.createElement("div");
      el.className = "inject-panel-list";
      el.style.minHeight = "500px";
      this.inject_panel_list = el;
      return el;
    }

    getNodeForModalByEdit() {
      let el_tina = d.createElement('div');
      el_tina.className = 'tina';
      el_tina.style.display = 'none';
      el_tina.innerHTML =
        `<div id="tina_panel"></div>
        <div onclick="save_texarea()" class="btn btn-outline-primary btn-sm my-3">Назад</div>`;


      let el_wr = d.createElement("div");
      el_wr.className = "panel_table--wr";
      el_wr.style.cssText =
        "display:flex;flex-direction:column;justify-content:center;min-height:500px";

      let el = d.createElement("div");
      el.className = "panel_table";

      el_wr.appendChild(el);
      el_wr.appendChild(el_tina);

      this.inject_panel = el;
      return el_wr;
    }

    setPanelList(raw) {
      let node = this.template.content
        .getElementById("list_panel")
        .children[0].cloneNode(true);
      let panels = node.querySelector("tbody");

      this.larvae = {};
      this.larvae_sel.clearAll();

      raw.map((panel) => {
        let item = this.template.content
          .getElementById("list_panel_item")
          .children[0].cloneNode(true)
          .querySelector("tr");
        this.larvae[panel.id] = {
          id: panel.id,
          safe: true,
        };
        let td = item.querySelectorAll("td");

        td[1].querySelector("span").innerText = panel.description;
        td[0].querySelector("span").innerText = this.larvae[
          panel.id
        ].title = panel.title;

        td[0].onclick = this.changeSelectedOnly.bind(
          this.larvae[panel.id],
          this.larvae_sel
        );
        item.querySelector(".btn-full").onclick = this.changeSelected.bind(
          this.larvae[panel.id],
          this.larvae_sel
        );
        item.querySelector(".btn-frame").onclick =
          this.changeSelectedFrame.bind(
            this.larvae[panel.id],
            this.larvae_sel
          );

        this.larvae[panel.id].node = panels.appendChild(item);
      });

      if (!panels.children.length)
        panels.appendChild(
          this.template.content
            .getElementById("list_panel_item_empty")
            .children[0].cloneNode(true)
            .querySelector("tr")
        );

      this.inject_panel_list.textContent = "";
      this.inject_panel_list.appendChild(node);
        console.log(this.inject_panel_list)
    }

    changeSelected(storage) {
        console.log(storage)
      if (this.node.dataset.sel) {
        if (this.node.dataset.sel == "frame") {
          this.node.dataset.sel = "full";
          this.safe = true;
        } else {
          this.node.dataset.sel = "frame";
          this.safe = false;
        }
      } else {
        this.node.dataset.sel = "full";
        this.safe = true;

        storage.data[this.id] = this;
      }
    }

    changeSelectedOnly(storage) {
      if (this.node.dataset.sel) {
        this.node.removeAttribute("data-sel");
        storage.clear(this.id);
        this.safe = true;
      } else {
        this.node.dataset.sel = "full";
        this.safe = true;
        storage.data[this.id] = this;
      }
    }

    changeSelectedFrame(storage) {
      if (this.node.dataset.sel) {
        this.node.removeAttribute("data-sel");
        storage.clear(this.id);
        this.safe = true;
      } else {
        this.node.dataset.sel = "frame";
        this.safe = false;

        storage.data[this.id] = this;
      }
    }

    /******************************************************************* */

    getPanelNode() {
      let node = this.template.content
        .getElementById("list_group_item")
        .children[0].cloneNode(true);

      this.node = node;
      this.line = node.querySelector(".line");

      this.line.id = this.node.dataset.id = this.id;
      this.line.querySelector(".line__name").innerText = this.title;

      this.line.querySelector(".btn-show").onclick =
        this.changeDisplay.bind(this);
      this.line.querySelector(".btn-hide").onclick =
        this.changeDisplay.bind(this);
      this.line.querySelector(".btn-edit").onclick = this.editPanel.bind(this);
      this.line.querySelector(".btn-remove").onclick = this.destroy.bind(this);
      this.line.querySelector(".btn-anchor").onclick =
        this.changeAnchor.bind(this);

      this.shield.warn = this.line.querySelector(".shield-warn");

      this.changeEmpty();

      this.setDisplay();
      this.setAnchor();
      return node;
    }

    setPanelNode(node) {
      node.appendChild(this.node);
    }

    changeEmpty() {
      if (!this.empty) {
        this.line.removeAttribute("data-warn");
        $(this.shield.warn).tooltip("dispose");
      } else {
        this.line.dataset.warn = "Пустая панель";
        $(this.shield.warn).tooltip({
          title: "Пустая панель не будет сохранена",
          container: ".pagecreator-container",
        });
      }
    }

    changeDisplay() {
      this.display = !this.display;
      this.setDisplay();
    }

    changeAnchor() {
      this.anchor = !this.anchor;
      this.setAnchor();
    }

    safeControl() {
      if (this.safe_mod) {
        this.node.dataset.safe = "Панель связана";
      } else {
        this.node.removeAttribute("data-safe");
      }
    }

    setDisplay() {
      if (this.display) {
        this.node.classList.remove("list-group-item_hide");
        this.line.dataset.display = "1";
      } else {
        this.node.classList.add("list-group-item_hide");
        this.line.dataset.display = "0";
      }
    }

    setAnchor() {
      if (!this.anchor) {
        this.node.classList.remove("list-group-item_anchor");
        this.line.dataset.anchor = "0";
      } else {
        this.node.classList.add("list-group-item_anchor");
        this.line.dataset.anchor = "1";
      }
    }

    editPanel() {
      let modalWindow = new ModalWindow();
      let dataPanel = this;
      modalWindow.init({
        title: "Редактирование панели: " + this.title,
        body: dataPanel.getNodeForModalByEdit(),
      });
      dataPanel
        .openEditorByModal(modalWindow, dataPanel.content.work)
        .finally(() => {
          delete modalWindow.$modal;
          modalWindow = null;
        });
    }

    setOutData(data) {
      this.title = data.title;
      this.display = data.display;
      this.anchor = data.anchor;
      this.parent = data.parent;
      this.safe_id = data.id;
      this.safe_id_panel = data.id_panel;
      this.safe_mod = data.safe;
      /****----- */
      [this.content.safe, this.content.frame, this.empty] = clearPanelData(
        data.content
      );

      this.content.frame = JSON.stringify(this.content.frame);
      this.content.safe = JSON.stringify(this.content.safe);

      if (data.hasOwnProperty("rock") && data.rock == true) {
        this.content.work = this.content.safe;
        this.content.safe = false;
      } else {
        if (!this.safe_mod) this.empty = true;
        if (data.safe) this.content.work = this.content.safe;
        else this.content.work = this.content.frame;
      }

      this.content = new Proxy(this.content, {
        set: (target, prop, val, receiver) => {
          if (prop == "frame" || prop == "safe") return false;
          [val, , this.empty] = clearPanelData(JSON.parse(val));
          val = JSON.stringify(val);

          if (target.safe == val) this.safe_mod = true;
          else this.safe_mod = false;
          this.safeControl();

          if (target.frame == val) {
            this.empty = true;
          }
          this.changeEmpty();

          return Reflect.set(target, prop, val, receiver);
        },
      });
    }

    init(param = { parent: this.dataHub.node_list }) {
      this.safeControl();
      this.setPanelNode(param.parent);
      this.state = true;
    }
  }

  class DataSection {
    type = "section";
    state = false;
    display = true;
    anchor = false;
    empty = true;
    content = "";
    template = d.getElementById("datahub_section");
    parent;
    node;
    node_list;
    line;
    Editor;
    List;
    dataHub;
    id;
    safe_id = false;
    safe_mod = false;

    hub = {};
    shield = {
      warn: undefined,
    };

    constructor(data = null) {
      if (data) this.setOutData(data);

      this.id = makeid();
      this.getSectionNode();

      return new Proxy(this, {
        /* get(target, prop, receiver) {
                    console.log(`GET ${prop}`);
                    return Reflect.get(target, prop, receiver); // (1)
                }, */
        set(target, prop, val, receiver) {
          // console.log(`SET ${prop}=${val}`);
          /* console.group('x')
                    console.log(target);
                    console.log(prop);
                    console.log(val);
                    console.log(receiver);
                    console.groupEnd('x'); */
          return Reflect.set(target, prop, val, receiver); // (2)
        },
      });
    }

    destroy(all = false) {
      if (this.safe_id) {
        if (!(this.type in this.dataHub.removelist))
          this.dataHub.removelist[this.type] = [];
        this.dataHub.removelist[this.type].push(this.safe_id);
      }
      if (all)
        this.List.toArray().map((child_id) =>
          this.dataHub.axis[child_id].destroy(all)
        );
      else if (!this.empty) {
        let shadow = new DocumentFragment();
        this.List.toArray().map((child_id) => {
          let child_el = this.dataHub.axis[child_id];
          this.dataHub.removeInHub.call(child_el);
          this.dataHub.registerInHub.call({
            ...this.dataHub.axis[this.parent],
            child: child_el,
          });

          shadow.appendChild(this.dataHub.axis[child_id].node);
        });
        this.node.after(shadow);
      }

      this.List.destroy();

      this.dataHub.removeInAxis.call(this);
      this.node.remove();
    }

    manipulator() { }

    serialize() {
      return this.dataHub.serialize.call(this);
    }

    getSectionNode(title = "") {
      let node = this.template.content.children[0].cloneNode(true);
      this.node = node;
      this.line = node.querySelector(".line");
      this.node_list = node.querySelector(".list-group");
      this.line.id = this.node.dataset.id = this.id;

      this.line.querySelector(".line__name").innerHTML = this.content
        ? this.content
        : "Введите заголовок";
      this.line.querySelector(".line__name").id = this.id + "_e";
      this.line.querySelector(".line__name").id = this.id + "_e";

      this.shield.warn = this.line.querySelector(".shield-warn");

      this.line.querySelector(".btn-show").onclick =
        this.changeDisplay.bind(this);
      this.line.querySelector(".btn-hide").onclick =
        this.changeDisplay.bind(this);
      this.line.querySelector(".btn-anchor").onclick =
        this.changeAnchor.bind(this);
      this.line.querySelector(".btn-remove").onclick = this.destroy.bind(
        this,
        true
      );
      this.line.querySelector(".btn-remove_sect").onclick = this.destroy.bind(
        this,
        false
      );

      this.setDisplay();
      this.setAnchor();
      return node;
    }

    initList() {
      this.List = new Sortable(this.node_list, {
        ...this.dataHub.sortable_settings,
        ...{
          onSort: (evn) => this.changeEmpty(),
          onRemove: this.dataHub.removeInHub.bind(this),
          onAdd: this.dataHub.registerInHub.bind(this),
        },
      });
    }

    setSectionNode(node) {
      node.appendChild(this.node);

      this.initList();
      this.changeEmpty();
      this.safeControl();

      this.Editor = new tinymce.Editor(
        this.id + "_e",
        {
          language: 'ru',
          inline: true,
          toolbar: "styleselect | bold italic  | removeformat",
          menubar: false,
          forced_root_block: '',
          formats: {
            removeformat: [
              {
                selector: '*',
                remove: 'all',
                split: false,
                expand: false,
                block_expand: true,
                deep: true
              }]
          },
          style_formats: [
            { title: 'mark', inline: 'mark', exact: true },
          ],

        },
        tinymce.EditorManager
      );
      this.Editor.on("Change", () => {
        let content = this.Editor.getContent();
        this.content = this.changeContent(content);
      });
      this.line.querySelector(".btn-edit").onclick = () => {
        this.line.querySelector(".line__name").focus();
      };
    }

    changeContent(content) {
      let clear_content = this.cleanContentFromTag(content);
      if (clear_content) {
        if (this.line.dataset.warn == "Пустой заголовок") {
          this.line.removeAttribute("data-warn");
          $(this.shield.warn).tooltip("dispose");
        }
        return content;
      } else {
        if (!this.line.dataset.warn) {
          this.line.dataset.warn = "Пустой заголовок";
          $(this.shield.warn).tooltip("dispose");
          $(this.shield.warn).tooltip({
            title: "Пустой заголовок",
            container: ".pagecreator-container",
          });
        }
        return "";
      }
    }

    cleanContentFromTag(content = null) {
      let el = d.createElement("div");
      el.innerHTML = content || this.content;
      return el.innerText
        .replace(/[\n\s]+/g, " ")
        .trim()
        .replace(/Введите\sзаголовок/i, "");
    }

    changeDisplay() {
      this.display = !this.display;
      this.setDisplay();
    }

    changeAnchor() {
      this.anchor = !this.anchor;
      this.setAnchor();
    }

    safeControl() {
      if (this.safe_mod) {
        this.node.dataset.safe = "Секция связана";
      } else {
        this.node.removeAttribute("data-safe");
      }
    }

    changeEmpty() {
      let count_child = this.List.toArray().length;
      if (count_child) {
        this.empty = false;
        this.line.removeAttribute("data-warn");
        $(this.shield.warn).tooltip("dispose");
      } else {
        this.empty = true;
        this.line.dataset.warn = "Пустая секция";
        $(this.shield.warn).tooltip("dispose");
        $(this.shield.warn).tooltip({
          title: "Пустая секция не будет сохранена",
          container: ".pagecreator-container",
        });
      }
      this.changeContent(this.content);
    }

    setDisplay() {
      if (this.display) {
        this.node.classList.remove("list-group-item_hide");
        this.line.dataset.display = "1";
      } else {
        this.node.classList.add("list-group-item_hide");
        this.line.dataset.display = "0";
      }
    }

    setAnchor() {
      if (!this.anchor) {
        this.node.classList.remove("list-group-item_anchor");
        this.line.dataset.anchor = "0";
      } else {
        this.node.classList.add("list-group-item_anchor");
        this.line.dataset.anchor = "1";
      }
    }

    setOutData(data) {
      this.content = data.content;
      this.display = data.display;
      this.anchor = data.anchor;
      this.parent = data.parent;
      // this.safe_mod = data.safe
      this.safe_id = data.id;
    }

    init(param = { parent: this.dataHub.node_list }) {
      this.setSectionNode(param.parent);
      this.Editor.render();
      this.state = true;
    }
  }

  class DataText {
    type = "text";
    state = false;
    display = true;
    content = "";
    template = d.getElementById("datahub_text");
    parent;
    node;
    line;
    Editor;
    dataHub;
    id;
    safe_id = false;
    empty = true;
    shield = {
      warn: undefined,
    };

    constructor(data = null) {
      if (data) this.setOutData(data);

      this.id = makeid();
      this.getTextNode();
    }

    destroy(all) {
      if (this.safe_id) {
        if (!(this.type in this.dataHub.removelist))
          this.dataHub.removelist[this.type] = [];
        this.dataHub.removelist[this.type].push(this.safe_id);
      }

      this.dataHub.removeInAxis.call(this);
      this.node.remove();
    }

    getTextNode(title = "") {
      let node = this.template.content.children[0].cloneNode(true);
      this.node = node;
      this.line = node.querySelector(".line");

      this.line.id = this.node.dataset.id = this.id;

      this.line.querySelector(".btn-show").onclick =
        this.changeDisplay.bind(this);
      this.line.querySelector(".btn-hide").onclick =
        this.changeDisplay.bind(this);
      this.line.querySelector(".btn-edit").onclick = this.editText.bind(this);
      this.line.querySelector(".btn-remove").onclick = this.destroy.bind(this);

      this.shield.warn = this.line.querySelector(".shield-warn");

      if (this.content) this.changeEmpty();
      else {
        this.line.querySelector(".line__name").innerText = "Заполните блок";
        this.line.dataset.warn = "Пустой блок";
      }

      this.setDisplay();
      return node;
    }

    setTextNode(node) {
      node.appendChild(this.node);
    }

    changeEmpty() {
      let content = this.cleanContentFromTag();
      if (content) {
        this.empty = false;
        this.line.removeAttribute("data-warn");
        this.line.querySelector(".line__name").innerText = content;
        $(this.shield.warn).tooltip("dispose");
      } else {
        this.empty = true;
        this.line.querySelector(".line__name").innerText = "Заполните блок";
        this.line.dataset.warn = "Пустой блок";
        $(this.shield.warn).tooltip({
          title: "Пустой блок не будет сохранен",
          container: ".pagecreator-container",
        });
      }
    }

    changeDisplay() {
      this.display = !this.display;
      this.setDisplay();
    }

    setDisplay() {
      if (this.display) {
        this.node.classList.remove("list-group-item_hide");
        this.line.dataset.display = "1";
      } else {
        this.node.classList.add("list-group-item_hide");
        this.line.dataset.display = "0";
      }
    }

    cleanContentFromTag() {
      let el = d.createElement("div");
      el.innerHTML = this.content;
      return el.innerText.replace(/[\n\s]+/g, " ").trim();
    }

    getNodeForModal() {
      let el = document.createElement("textarea");
      el.className = "form-control";
      el.id = this.id;
      el.setAttribute("name", "datahub_node_text");
      el.dataset.id = el.id;
      return el;
    }

    openEditorByModal(modalWindow, content) {
        tinymce_param.target = modalWindow.modal_node.querySelector("textarea");
        tinymce_param.init_instance_callback = (editor) => (this.Editor = editor);
        return new Promise((resolve, reject) => {
            tinymce.init(tinymce_param).then(() => {
                $('.tox-tbtn').on('click',(e)=>{
                    function showModal(btn)
                    {
                        if(btn === 'Вставить/редактировать ссылку' || btn === 'Вставить/редактировать мультимедиа' || btn === 'Вставить/изменить изображение' || btn === 'Исходный код'){
                            $('.modal-pgcreator').css('visibility','hidden')
                            setTimeout(()=>{
                                $('.tox-dialog__footer-end').find('button').on('click',()=>{
                                    $('.modal-pgcreator').css('visibility','visible')
                                })
                                $('.tox-button').on('click',()=>{
                                    $('.modal-pgcreator').css('visibility','visible')
                                })
                            },500)
                        }

                    }
                    if($(e.target).attr('aria-label')){
                        showModal($(e.target).attr('aria-label'))
                    }else {
                        showModal($(e.target).closest('.tox-tbtn').attr('aria-label'));
                    }
                })
                this.Editor.setContent(this.content);
                this.Editor.addShortcut("meta+s", "Save content", () =>
                    modalWindow.saveModal()
                );

                modalWindow.opened_modal = (modalWindow) => {
                    this.Editor.focus();
                };

                if (!this.state) {
                    modalWindow.close_modal = (modalWindow) => {
                        this.Editor.destroy();
                        if (!this.empty) {
                            this.changeEmpty();
                            resolve();
                        } else reject();
                    };
                    modalWindow.save_modal = (modalWindow) => {
                        this.content = this.Editor.getContent();
                        this.empty = false;
                    };
                } else {
                    modalWindow.close_modal = (modalWindow) => {
                        this.Editor.destroy();
                        resolve();
                    };
                    modalWindow.save_modal = (modalWindow) => {
                        this.content = this.Editor.getContent();
                        this.changeEmpty();
                    };
                }

                modalWindow.openModal();
            });
        });
    }

    editText() {
      let modalWindow = new ModalWindow();
      let dataText = this;
      modalWindow.init({
        title: "Редактирование текстового блока",
        body: dataText.getNodeForModal(),
      });
      dataText.openEditorByModal(modalWindow, dataText.content).finally(() => {
        delete modalWindow.$modal;
        modalWindow = null;
      });
    }

    setOutData(data) {
      this.content = data.content;
      this.display = data.display;
      this.parent = data.parent;
      this.safe_id = data.id;
    }

    init(param = { parent: this.dataHub.node_list }) {
      this.setTextNode(param.parent);
      this.state = true;
    }
  }

  class DataHub {
    type = "root";
    id = "root";
    state = true;
    sortable_settings = sortable_settings;
    add_text = d.getElementById("datahub_add_text");
    add_section = d.getElementById("datahub_add_section");
    add_panel = d.getElementById("datahub_add_panel");
    app = d.getElementById("datahub");
    storage_input = d.getElementById("datahub_storage");
    form = d.getElementById("page");
    parent;
    storage;
    node_list;
    List;
    removelist = {};
    chooselist = [];

    hub = {};
    axis = {};

    constructor() {
      this.dataHub = this;
      this.parent = this.id;
      this.node_list = d.createElement("div");

      this.node_list.className =
        "list-group nested-sortable nested-sortable-root";
      this.node_list.id = "datahub_workshop";

      this.sortable_settings = {
        ...this.sortable_settings,
        onRemove: this.dataHub.removeInHub.bind(this),
        onAdd: this.dataHub.registerInHub.bind(this),
        onUnchoose: (evn) => {
          let items = evn.items.length ? evn.items : [evn.item];
          let current_parent = this.dataHub.axis[items[0].dataset.id].parent;
          items.map((el) => {
            let node = this.dataHub.axis[el.dataset.id];
            if (node.parent != current_parent) {
              this.dataHub.chooselist.map((old_el) => {
                Sortable.utils.deselect(old_el.node);
              });
              this.dataHub.chooselist = [];
            }
            this.dataHub.chooselist.push(node);
          });
        },
        onChoose: (evn) => {
          this.dataHub.chooselist = [];
        },
      };

      try {
        if (this.storage_input.value.length)
          this.storage = JSON.parse(this.storage_input.value);
        else this.storage = false;

        this.List = new Sortable(this.node_list, this.sortable_settings);
        this.axis = { root: this };

        if (this.storage) this.buildData(this.storage);
      } catch (e) {
        d.body.classList.add("pgcr--fail");
        this.add_text.remove();
        this.add_section.remove();
        this.state = false;

        console.error(e);
      }
      this.app.appendChild(this.node_list);

      if (!this.state) alert("Данные страницы повреждены");
    }

    buildData(data, parent = this) {
      data.map((node) => {
        switch (node.type) {
          case "section":
            let dataSection = new DataSection({
              ...node,
              parent: parent.id,
            });
            this.registerInAxis.call(parent, dataSection);
            if (node._child.length) this.buildData(node._child, dataSection);
            dataSection.init({ parent: parent.node_list });

            break;
          case "text":
            let dataText = new DataText({
              ...node,
              parent: parent.id,
            });
            this.registerInAxis.call(parent, dataText);
            dataText.init({ parent: parent.node_list });

            break;
          case "panel":
            let dataPanel = new DataPanel({
              ...node,
              content: node.content,
              parent: parent.id,
            });
            this.registerInAxis.call(parent, dataPanel);
            dataPanel.init({ parent: parent.node_list });

            break;
        }
      });
    }

    registerInAxis(node) {
      node.dataHub = this.dataHub;
      this.dataHub.axis[node.id] = node;
      this.dataHub.registerInHub.call({
        ...this,
        child: node,
      });
    }

    removeInAxis() {
      this.dataHub.removeInHub.call(this);
      let axis = this.dataHub.axis;
      delete axis[this.id];
      return true;
    }

    registerInHub(evn = null) {
      if (evn)
        this.dataHub.chooselist.map((el) => {
          this.hub[el.id] = el;
          el.parent = this.id;
        });
      else {
        this.hub[this.child.id] = this.child;
        this.child.parent = this.id;
      }
    }

    removeInHub(evn = null) {
      if (evn)
        this.dataHub.chooselist.map((el) => {
          delete this.hub[el.id];
        });
      else delete this.dataHub.axis[this.parent].hub[this.id];
    }

    serialize() {
      let res = [];
      this.List.toArray().map((id) => {
        if (!Object.keys(this.hub).length) return 1;

        let node = this.hub[id];
        let node_data = {};
        switch (node.type) {
          case "section":
            node_data.safe = node.safe_mod;
            node_data.anchor = node.anchor;
            node_data._child = node.serialize();
            if (node.empty || !node_data._child.length) return 1;
            break;
          case "text":
            if (node.empty) return 1;
            break;
          case "panel":
            node_data.safe = node.safe_mod;
            node_data.anchor = node.anchor;
            node_data.id_panel = node.safe_id_panel;

            if (node_data.safe) node_data.content = null;
            else node_data.content = node.content.work;

            if (node.empty) return 1;
            break;
        }
        node_data = {
          ...{
            display: node.display,
            type: node.type,
            content: node.content,
            id: node.safe_id,
          },
          ...node_data,
        };

        res.push(node_data);
      });
      return res;
    }

    buttonLockChange(btn) {
      btn.disabled = !btn.disabled;
    }

    addText() {
      this.buttonLockChange(this.add_text);
      let modalWindow = new ModalWindow();
      let dataText = new DataText();

      modalWindow.init({
        title: "Вставка текстового блока",
        body: dataText.getNodeForModal(),
      });

      dataText
        .openEditorByModal(modalWindow)
        .then(
          () => {
            this.registerInAxis(dataText);
            dataText.init();
          },
          () => {
            dataText = null;
          }
        )
        .finally(() => {
          delete modalWindow.$modal;
          modalWindow = null;
          this.buttonLockChange(this.add_text);
        });
    }

    addSection() {
      let dataSection = new DataSection();
      this.registerInAxis(dataSection);
      dataSection.init();
    }

    addPanel() {
      this.buttonLockChange(this.add_panel);

      let dataPanel = new DataPanel();

      let modalWindow = new ModalWindow();

      modalWindow.init({
        title: "Редактор панелей",
        body: dataPanel.getNodeForModal(),
      });

      dataPanel
        .openSelectorByModal(modalWindow)
        .then(
          (panels) => {
            dataPanel = null;
            for (const id in panels) {
              if (Object.hasOwnProperty.call(panels, id)) {
                dataPanel = new DataPanel({
                  title: panels[id].title,
                  content: panels[id].content,
                  display: true,
                  id: false,
                  id_panel: id,
                  safe: panels[id].safe,
                  parent: this.id,
                });
                this.registerInAxis(dataPanel);
                dataPanel.init();
              }
            }
          },
          () => {
            dataPanel = null;
          }
        )
        .finally(() => {
          delete modalWindow.$modal;
          modalWindow = null;
          this.buttonLockChange(this.add_panel);
        });
    }

    goodBye() {
      let res = {};
      let data = this.serialize();
      let remove = this.removelist;
        if (data.length) res.data = data;
        if (Object.keys(remove).length) res.remove = remove;
        if (Object.keys(res).length)
            this.storage_input.value = JSON.stringify(res);

      let form = $('#page');
      let dataForm = form.serialize()
        dataForm
        console.log(dataForm)

        $.ajax({
            type: "post",
            url: form.attr('action'),
            data: dataForm,
            success(data){
                console.log(data)
            }
        })

    }
  }

  $.ajaxSetup({
      headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
  });

  let dataHub = new DataHub();
  w.dataHub = dataHub;

  dataHub.add_text.addEventListener("click", () => {
    dataHub.addText();
  });
  dataHub.add_section.addEventListener("click", () => {
    dataHub.addSection();
  });
  dataHub.add_panel.addEventListener("click", () => {
    dataHub.addPanel();
  });

    console.log(dataHub)

  dataHub.form.addEventListener("submit", (e) => {
      e.preventDefault()
    dataHub.goodBye();
  });

})(window, document);

$(document).on('focusin', function (e) {
  if ($(e.target).closest(".mce-window, .moxman-window").length) {
    e.stopImmediatePropagation();
  }
});

