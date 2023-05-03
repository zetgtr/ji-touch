<table id="example2" class="table table-bordered text-nowrap border-bottom">
    <thead>
    <tr>
        <th class="border-bottom-0 text-center">ID#</th>
        <th class="border-bottom-0 text-center">Заказчик</th>
        <th class="border-bottom-0 text-center">Заказ</th>
        <th class="border-bottom-0 text-center">Дата/Время</th>
    </tr>
    </thead>
    <tbody>
    @foreach($orders as $order)
        <tr class="delete-element">
            <td class="text-center">{{ $order->id }}</td>
            <td>
                <div>
                    <strong>Контактное лицо:</strong>
                    {{ $order->name }}
                </div>
                <div>
                    <strong>Телефон:</strong>
                    <a href="{{ $order->phone }}">{{ $order->phone }}</a>
                </div>
                <div>
                    <strong>Email:</strong>
                    <a href="mailto:{{ $order->email }}">{{ $order->email }}</a>
                </div>
            </td>
            <td class="text-center"><{{ $order->name }}</td>
            <td class="text-center"><{{ $order->create_ut->format('d.m.Y H:i') }}</td>
{{--            <td class="text-center">{{ $feedback->email }}</td>--}}
{{--            <td class="text-center">{{ $feedback->phone }}</td>--}}
{{--            <td class="text-center"><a href="{{$feedback->pages}}">{{ $feedback->pages }}</a></td>--}}
        </tr>
    @endforeach
    </tbody>
</table>
<script src="{{ asset('assets/js/table-data.js')}}"></script>
