import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const MyInfiniteScroll = () => {
  const [items, setItems] = useState([]); 
  const [error, setError] = useState(null);
  const [page, setPage] = useState(4); 

  const fetchData = () => {
    fetch(`https://dummyjson.com/products?limit=${page}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        console.log(data,"dataaa")
        // setItems(prevItems => [...prevItems, ...data.products]); 
        // setTimeout(()=>{
          setItems([...items,data.products]); 
          setPage(prevPage => prevPage + 4);

        // },[1000])
     
      })
      .catch(error => {
        setError(error);
      });
  };
console.log(page)
  useEffect(() => {
    fetchData();
  }, []); 
console.log(items)
  return (
    <div>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchData} 
        hasMore={true} 
        loader={<p>Loading...</p>} 
        endMessage={<p>No more data to load.</p>} 
        scrollThreshold={1}
      >
        <ul>
          {items.map(item => (<>
            <li key={item.id}>{item.title}</li>
            <li>{item.id}</li>
            </>  ))}
        </ul>
      </InfiniteScroll>
      {error && <p>Error: {error.message}</p>} {/* Display error message if there's an error */}
    </div>
  );
};

export default MyInfiniteScroll;
