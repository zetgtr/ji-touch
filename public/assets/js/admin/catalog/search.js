class Search
{
    constructor() {
        this.searchTemplate = $(document.getElementById('search').content.children[0]).clone();
        this.productTemplate = $(document.getElementById('product').content.children[0]).clone();
        this.input = this.searchTemplate.find('#search-input');
        this.searchContainer = this.searchTemplate.find('#search-container');
        this.modalBody = $('#modaldemo8').find('.modal-body')
    }
    render()
    {
        this.modalBody.html('')
        this.modalBody.append(this.searchTemplate)
        this.input.on('input',({target})=>{
            if(target.value.length > 2)
               this.get(target.value)
        })
    }

    get(text)
    {
        axios({
            method: 'get',
            url: '/api/admin/catalog_search/'+text,
        }).then(({data}) => {
            this.searchContainer.html('')
            if(data.length > 0)
                data.forEach(el=>{
                    const productTemplateNode = this.productTemplate.clone()
                    productTemplateNode.attr("href",el.url)
                    productTemplateNode.find('.text-sarch').text(el.title)
                    this.searchContainer.append(productTemplateNode)
                })
            else
                this.searchContainer.text("Нечего не найдено")
            console.log(data)
        });;
    }
}

$(document).ready(()=>{
    $('.search').on('click',()=>{
        const search = new Search()
        search.render()
    })
})
