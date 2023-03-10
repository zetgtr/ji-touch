{{--<div>--}}
{{--    <form action="{{ route('admin.roles.store') }}" method="post" class="row">--}}
{{--        @csrf--}}
{{--        <div class="col-lg-12">--}}
{{--            <div class="form-group">--}}
{{--                <label for="roles_name">{{__("Roles")}}</label>--}}
{{--                <input name="name" type="text" class="form-control @error('name') is-invalid @enderror" value="{{old('name')}}">--}}
{{--            </div>--}}
{{--        </div>--}}
{{--        <button class="btn btn-primary mt-3">{{__("Save")}}</button>--}}
{{--    </form>--}}
{{--</div>--}}

{{--<script src="{{ asset('assets/js/admin/modal.js') }}" ></script>--}}

<!-- MODAL EFFECTS -->
<div class="modal fade" id="modaldemo8">
    <div class="modal-dialog modal-dialog-centered text-center" role="document">
        <div class="modal-content modal-content-demo">
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close" data-bs-dismiss="modal"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like readable English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button> <button class="btn btn-light" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
