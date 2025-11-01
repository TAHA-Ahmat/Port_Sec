import { defineStore } from 'pinia'
export const useProjectStore = defineStore('project', {
  state: () => ({
    // Valeurs alignées avec fr.json (kpiValues)
    capexTotal: 58_000_000_000,    // 58 Mds XAF
    equity: 20_000_000_000,         // 20 Mds XAF
    debtNeeded: 38_000_000_000,     // 38 Mds XAF
    apdProgress: 0.75               // 75%
  })
})
