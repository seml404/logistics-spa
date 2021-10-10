<template>
  <div class="checkbox__wrapper">
    <div class="checkbox" @click="this.active = !this.active">
      <div v-if="active" class="checkobox-active">
        <div class="icons8-checkmark"></div>
      </div>
    </div>
    <p class="input-name input-name_checkbox">{{ typeName.title }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  props: ["typeName"],
};
</script>

<style>
.checkbox__wrapper {
  display: flex;
  align-items: center;
  margin-top: 16px;
}

.checkbox {
  height: 24px;
  width: 24px;
  border: 2px solid #ffffff;
  margin-right: 12px;
}

.icons8-checkmark {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjAiIGhlaWdodD0iMjAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIHRyYW5zZm9ybT0iIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0iIzM0MzUzOSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xNDQuMjY1LDI5LjY3Yy0yLjI4NDM3LDAuMDgwNjMgLTQuMzgwNjIsMS4yOSAtNS41OSwzLjIyNWwtNjQuNzE1LDk5LjAwNzVsLTQxLjkyNSwtMzYuMjI3NWMtMS44MDA2MiwtMS44Njc4MSAtNC41MDE1NiwtMi41NjY1NiAtNi45ODc1LC0xLjc4NzE5Yy0yLjQ3MjUsMC43NjU5NCAtNC4zMTM0NCwyLjg2MjE5IC00Ljc0MzQ0LDUuNDE1MzFjLTAuNDMsMi41NjY1NiAwLjYwNDY5LDUuMTQ2NTYgMi43MDA5NCw2LjY5MTg3bDQ3Ljk0NSw0MS40OTVjMS41MDUsMS4yNzY1NiAzLjQ5Mzc1LDEuODQwOTQgNS40NDIxOSwxLjU1ODc1YzEuOTYxODgsLTAuMjk1NjIgMy42OTUzMSwtMS40MTA5NCA0Ljc3MDMxLC0zLjA2Mzc1bDY5LjEyMjUsLTEwNS41NjVjMS40NzgxMywtMi4xNjM0NCAxLjU5OTA2LC00Ljk1ODQ0IDAuMzIyNSwtNy4yNDI4MWMtMS4yNzY1NiwtMi4yNzA5NCAtMy43MzU2MiwtMy42MjgxMiAtNi4zNDI1LC0zLjUwNzE5eiI+PC9wYXRoPjwvZz48cGF0aCBkPSIiIGZpbGw9Im5vbmUiPjwvcGF0aD48cGF0aCBkPSIiIGZpbGw9Im5vbmUiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==")
    50% 50% no-repeat;
  background-size: 100%;
}
</style>
