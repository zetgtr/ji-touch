<div class="row">
    <div class="col-lg-6">
        @forelse($categories as $category)
            <a href="{{ route('admin.catalog.product.show', ['product'=>$category->id]) }}">
                <div class="border-0 p-0 mb-4 pt-4">
                    <div class="media mt-0 border">

                            <div class="ps-0 me-3">
                                <i class="fas fa-external-link-alt shared-files text-muted"></i>
                            </div>
                            <div class="media-body">
                                <div class="d-flex align-items-center">
                                    <div class="mt-3">
                                        <h5 class="mb-1 fs-13 fw-semibold text-dark">{{ $category->title }}</h5>
                                    </div>
                                    <span class="mt-2 ms-auto fs-14">
                                    <span class="float-end">
                                        <span class="op-7 text-muted">
                                            <i class="fas fa-external-link-alt"></i>
                                            Открыть
                                        </span>
                                    </span>
                                </span>
                                </div>
                            </div>

                    </div>
                </div>
            </a>
        @empty
            Не созданы категории
        @endforelse
    </div>
    <div class="col-lg-6">
        <div class="iconed-caption">
            <i class="fas fa-cogs"></i>
            Управление
        </div>
        <a href="{{ route('admin.catalog.product.create') }}" class="btn btn-sm btn-outline-primary">
            <small>Добавить позицию</small>
        </a>
        <div class="iconed-caption mt-3">
            <i class="fas fa-search"></i>
            Поиск
        </div>
        <form id="searchmachineform">
            <div class="form-group">
                <input type="text" class="form-control form-control-sm" id="search-field">
            </div>
        </form>
        <div id="searchresult"></div>
    </div>
</div>
