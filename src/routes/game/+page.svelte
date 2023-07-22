<script lang="ts">
  import {CreatePlayApp} from '$lib'

  let canvas: HTMLCanvasElement;
  $: if (canvas) CreatePlayApp(canvas);
</script>

<canvas bind:this={canvas} />
