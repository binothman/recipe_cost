import React from 'react';

import {
  onSnapshot,
  query,
} from 'firebase/firestore';

import { itemsRef } from 'fire';

const useItems = () => {
  const [items, setItems] = React.useState([]);

  const q = query(itemsRef);

  const getItems = async () => {
    onSnapshot(q, querySnapshot => {
      const list = [];
      
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });

      setItems(list);
    });
  }

  React.useEffect(() => {
    getItems();
  }, [])

  return {
    items,
  }
};

export default useItems;
