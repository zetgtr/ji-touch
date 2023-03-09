<div class="card-body">
    <div class="table-responsive">
        <table id="example2" class="table table-bordered text-nowrap border-bottom">
            <thead>
            <tr>
                <th class="border-bottom-0 text-center">Заголовок</th>
                <th class="border-bottom-0 text-center">Дата создания</th>
                <th class="border-bottom-0 text-center">Просмотры</th>
                <th class="border-bottom-0 text-center">Действие</th>
            </tr>
            </thead>
            <tbody>
            @forelse($newsList as $news)
                <tr>
                    <td>{{ $news->title }}</td>
                    <td class="text-center">{{ $news->created_at->format('d.m.Y H:i') }}</td>
                    <td class="text-center">Edinburgh</td>
                    <td class="text-center">
                        <i class="fal fa-users"></i>
                    </td>
                </tr>
            @empty
                Записей нет
            @endforelse
            </tbody>
        </table>
    </div>
</div>

<script src="{{ asset('assets/plugins/datatable/js/jquery.dataTables.min.js')}}"></script>
<script src="{{ asset('assets/plugins/datatable/js/dataTables.bootstrap5.js')}}"></script>
<script src="{{ asset('assets/plugins/datatable/js/dataTables.buttons.min.js')}}"></script>
<script src="{{ asset('assets/plugins/datatable/js/buttons.bootstrap5.min.js')}}"></script>
<script src="{{ asset('assets/plugins/datatable/js/jszip.min.js')}}"></script>
<script src="{{ asset('assets/plugins/datatable/pdfmake/pdfmake.min.js')}}"></script>
<script src="{{ asset('assets/plugins/datatable/pdfmake/vfs_fonts.js')}}"></script>
<script src="{{ asset('assets/plugins/datatable/js/buttons.html5.min.js')}}"></script>
<script src="{{ asset('assets/plugins/datatable/js/buttons.print.min.js')}}"></script>
<script src="{{ asset('assets/plugins/datatable/js/buttons.colVis.min.js')}}"></script>
<script src="{{ asset('assets/plugins/datatable/dataTables.responsive.min.js')}}"></script>
<script src="{{ asset('assets/plugins/datatable/responsive.bootstrap5.min.js')}}"></script>
<script src="{{ asset('assets/js/table-data.js')}}"></script>
