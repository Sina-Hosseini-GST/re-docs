<script>
  let { href, children } = $props()
</script>

<a href={href} class="flex items-center h-full xl:px-2 px-1.5 underline decoration-dotted underline-offset-4 shrink-0 whitespace-nowrap">
  {@render children()}
</a>