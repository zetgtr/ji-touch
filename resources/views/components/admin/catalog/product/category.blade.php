@foreach($categories as $category)
    <a href="{{ route('admin.catalog.product.show', ['product'=>$category->id]) }}">
        <div class="border-0 p-0 mb-2">
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
@endforeach
