<template>
  <a class="more" href="">
    <slot></slot>
    <svg
      width="38"
      height="12"
      viewBox="0 0 38 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_6_2)">
        <path
          d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696698C32.0434 0.403805 31.5685 0.403805 31.2756 0.696698C30.9828 0.989592 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75H36.5789V5.25H0V6.75Z"
          fill="black"
        />
        <rect x="7" y="5" width="2" height="2" fill="white" />
        <rect x="3" y="5" width="2" height="2" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_6_2">
          <rect width="38" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
    
  </a>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.more {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--c-primary);
  margin-top: auto;
  margin-bottom: 10px;
  span {
    position: relative;
    z-index: 1;
    transition: 0.3s linear;
  }
  svg {
    width: 40px;
    height: 13px;
    position: relative;
    path {
      transition: 0.3s linear;
      fill: var(--c-secondary);
    }
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: -100%;
      transition: 0.3s linear;
      background-color: var(--c-primary);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 0;
    height: 0;
    transform: translate(-50%, -50%);
    background-color: #e9f4f890;
    border-radius: 50%;
    z-index: 0;
    transition: 0.4s linear;
  }
  &:hover {
    &::before {
      width: 60px;
      height: 60px;
    }
    span {
      color: var(--c-secondary);
    }
    svg {
      path {
        fill: var(--c-primary);
      }
    }
  }
}
</style>