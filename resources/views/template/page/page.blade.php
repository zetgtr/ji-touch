import React from "react";
@foreach($panelList as $item)
{{ $item['import'] }}"{{ $item['from'] }}"
@endforeach

const {{ ucfirst($name) }} = () => {
    return (
        <div className="App">
    @foreach($panelList as $item)
        <{{ $item['component'] }} />
    @endforeach
    </div>
    );
};

export default {{ ucfirst($name) }}
