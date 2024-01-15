const getIndexedMovies = ()=>{
let transaction = this.db.transaction(["table"]);
let object_store = transaction.objectStore("table");
request = object_store.openCursor();

request.onerror = function(event) {
   console.err("error fetching data");
};
request.onsuccess = function(event) {
   let cursor = event.target.result;
   if (cursor) {
       let key = cursor.primaryKey;
       let value = cursor.value;
       console.log(key, value);
       cursor.continue();
   }
   else {
       // no more results
   }
};
}