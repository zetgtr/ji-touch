<template id="search">
    <div>
        <input type="text" id="search-input" class="form-control" placeholder="Введите запрос поиска">
        <div id="search-container" class="mt-2"></div>
    </div>
</template>
<template id="product">
    <div class="product-container-search delete-element">
        <div class="border-0 p-0 mb-2 row">
            <a id="product-item" class="media mt-0 col-11 border text-sarch">
            </a>
            <a href="" class="btn col-1 d-flex justify-content-center delete align-items-center btn-danger btn-xs"
               data-owner-id="1">
                <i class="fa fa-times" aria-hidden="true"></i>
            </a>
        </div>
    </div>

</template>
