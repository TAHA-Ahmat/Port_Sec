import { defineStore } from 'pinia'
export const useProjectStore = defineStore('project', {
  state: () => ({
    capexTotal: 37_000_000_000,
    equity: 7_000_000_000,
    debtNeeded: 30_000_000_000,
    apdProgress: 0.75
  })
})
