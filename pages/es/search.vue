<script setup>
const route = useRoute()
const q = String(route.query.q || '').trim()

await navigateTo(q ? `/es/search-result/${encodeURIComponent(q)}` : '/es/search-result/all', {
  replace: true,
})
</script>
