<script setup>
const route = useRoute()
const q = String(route.query.q || '').trim()

await navigateTo(q ? `/search-result/${encodeURIComponent(q)}` : '/search-result/all', {
  replace: true,
})
</script>
