import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface ListItem {
  id: string;
  title: string;
  description: string;
  createdAt: number;
}

export const useListStore = defineStore('list', () => {
  const items = ref<ListItem[]>([]);

  const addItem = (title: string, description: string) => {
    const newItem: ListItem = {
      id: Date.now().toString(),
      title,
      description,
      createdAt: Date.now()
    };
    items.value.unshift(newItem);
    items.value.sort((a, b) => b.createdAt - a.createdAt);
  };

  const getItems = () => {
    return items.value;
  };

  return {
    items,
    addItem,
    getItems
  };
});