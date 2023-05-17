<template> {{ '{{'.$alias.'}'.'}' }}</template>

<script>
export default {
  props: {
    {{ $alias }}: Array
  },
  components: {},
  data() {
    return {
    };
  },
};
</script>
{{--  @foreach($data[0] as $key=>$item)--}}
{{--      @if(is_array($item))--}}
{{--{{setArray($item,"[".$key."]",$alias)}}--}}
{{--      @else--}}
{{--      {{ $key }}: this.{{ $alias }}[0].{{$key}},--}}
{{--      @endif--}}
{{--  @endforeach--}}
{{--@php--}}
{{--    function setArray(array $array,string $keySecond,string $alias){--}}
{{--        $data = "";--}}
{{--        foreach ($array as $key=>$item){--}}
{{--            if(is_array($item)){--}}
{{--                $data .= setArray($item,$keySecond."[".$key."]",$alias);--}}
{{--            }else{--}}
{{--                $data .= $key.": this.".$alias."[0]".$keySecond.".".$key.",".PHP_EOL;--}}
{{--            }--}}
{{--        }--}}
{{--        return $data;--}}
{{--    }--}}
{{--@endphp--}}
