<template>
  <el-button type="primary" :class="AddClass">
    {{Value}}
    <slot></slot>
  </el-button>
</template>
<script src="./Button.js"></script>