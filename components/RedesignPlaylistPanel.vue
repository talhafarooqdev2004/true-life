<template>
  <section class="playlist-panel">
    <div class="playlist-head">
      <div>
        <p class="label"><svg class="label-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7cb342" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/><line x1="17" y1="17" x2="22" y2="17"/></svg>Playlist Builder</p>
        <h3>Build Your Video Playlist</h3>
      </div>
      <button type="button" class="mode-btn" @click="toggleExpanded">
        {{ expanded ? 'Close' : 'Open' }}
      </button>
    </div>

    <p v-if="!expanded" class="summary">
      {{ selectedIds.length }} categories selected.
      <button type="button" class="inline-link" @click="toggleExpanded">Choose categories</button>
    </p>

    <div v-else class="panel-body">
      <div class="check-grid">
        <label v-for="item in sortedCategories" :key="item.id" class="pill">
          <input
            type="checkbox"
            :checked="selectedLookup.has(item.id)"
            @change="toggleItem(item.id)"
          />
          <span>{{ getLocalizedName(item) }}</span>
        </label>
      </div>

      <div class="action-row">
        <button type="button" class="secondary" @click="clearAll">Clear</button>
        <button type="button" class="primary" :disabled="selectedIds.length === 0" @click="createPlaylist">
          Create Playlist ({{ selectedIds.length }})
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  categories: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['create'])

const { locale } = useI18n()
const expanded = ref(false)
const selectedIds = ref([])

const selectedLookup = computed(() => new Set(selectedIds.value))

const sortedCategories = computed(() => {
  return [...props.categories].sort((a, b) => {
    const left = getLocalizedName(a)
    const right = getLocalizedName(b)
    return left.localeCompare(right)
  })
})

function getLocalizedName(item) {
  if (!item) {
    return ''
  }

  if (locale.value === 'en') {
    return item.name || ''
  }

  return item[`name_${locale.value}`] || item.name || ''
}

function toggleExpanded() {
  expanded.value = !expanded.value
}

function toggleItem(id) {
  if (selectedLookup.value.has(id)) {
    selectedIds.value = selectedIds.value.filter((itemId) => itemId !== id)
    return
  }

  selectedIds.value = [...selectedIds.value, id]
}

function clearAll() {
  selectedIds.value = []
}

function createPlaylist() {
  if (!selectedIds.value.length) {
    return
  }

  emit('create', selectedIds.value)
}
</script>

<style scoped lang="scss">
.playlist-panel {
  margin-top: 18px;
  border: 1px solid rgba(196, 203, 211, 0.55);
  border-radius: 18px;
  background: linear-gradient(180deg, #f9fafb, #f3f6f9);
  box-shadow: 0 14px 24px rgba(20, 34, 52, 0.08);
  padding: 20px;
}

.playlist-head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: flex-start;
}

.label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  border: 1px solid rgba(196, 203, 211, 0.55);
  background: #fff;
  padding: 6px 16px;
  margin: 0 0 8px;
  color: #5a6877;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  font-family: 'Inter', Arial, sans-serif;
}

.playlist-head h3 {
  margin: 6px 0 0;
  color: #1a2a3a;
  font-family: 'Inter', Arial, sans-serif;
  font-size: 22px;
}

.mode-btn {
  border: 1px solid rgba(196, 203, 211, 0.8);
  border-radius: 999px;
  background: #fff;
  color: #3c4b5c;
  padding: 9px 16px;
  font-size: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 150ms ease, color 150ms ease, border-color 150ms ease;
}

.mode-btn:hover {
  background: #7cb342;
  color: #fff;
  border-color: #7cb342;
}

.summary {
  margin: 12px 0 0;
  color: #5a6877;
  font-size: 16px;
}

.inline-link {
  border: none;
  background: transparent;
  color: #7cb342;
  padding: 0;
  margin-left: 6px;
}

.panel-body {
  margin-top: 14px;
}

.check-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}

.pill {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(196, 203, 211, 0.75);
  border-radius: 12px;
  padding: 8px 10px;
  color: #435264;
  font-size: 15px;
  background: rgba(255, 255, 255, 0.86);
}

.pill input {
  accent-color: #7cb342;
}

.action-row {
  margin-top: 14px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.primary,
.secondary {
  border: none;
  border-radius: 12px;
  min-height: 38px;
  padding: 0 14px;
  font-size: 14px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.primary {
  color: #fff;
  background: #7cb342;
}

.primary:disabled {
  opacity: 0.5;
}

.secondary {
  color: #3f4f60;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(196, 203, 211, 0.75);
}

@media (max-width: 980px) {
  .check-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .check-grid {
    grid-template-columns: 1fr;
  }

  .action-row {
    justify-content: stretch;
  }

  .primary,
  .secondary {
    flex: 1 1 0;
  }
}
</style>
