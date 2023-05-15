import Vue from 'vue';

declare class Slider extends Vue {
  modelValue?: any;
  value?: any;
  id?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number;
  orientation?: 'horizontal'|'vertical';
  direction?: 'ltr'|'rtl';
  tooltips?: boolean;
  options?: object;
  merge?: number;
  format?: any;
  classes?: object;
  showTooltip?: 'always'|'focus'|'drag';
  tooltipPosition?: null|'top'|'bottom'|'left'|'right';
  lazy?: boolean;
  ariaLabelledby?: string;
  aria?: object;

  $emit(eventName: 'start', e: {originalEvent: Event, value: any}): this;
  $emit(eventName: 'slide', e: {originalEvent: Event, value: any}): this;
  $emit(eventName: 'drag', e: {originalEvent: Event, value: any}): this;
  $emit(eventName: 'update', e: {originalEvent: Event, value: any}): this;
  $emit(eventName: 'change', e: {originalEvent: Event, value: any}): this;
  $emit(eventName: 'set', e: {originalEvent: Event, value: any}): this;
  $emit(eventName: 'end', e: {originalEvent: Event, value: any}): this;
}

export default Slider;