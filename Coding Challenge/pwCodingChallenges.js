//           Coding Challenges Assignment Questions


        // Reverse String(Question No.1 )

        const input = function nameString(){
            console.log("Hey there I am Adarsh Singh");
        }
        
        
        setTimeout(input,2000)
        
        
        
        
        //  Random Number Generator with Delay and Progress Indication: (Question No.2 )
        
        const delayTime = 5;
        
        function countdown(seconds){
          if(seconds > 0){
            console.log(`Time remaining: ${seconds} seconds`);
            setTimeout(() => countdown(seconds -1),1000);
          }else{
            const randomNumber = Math.floor(Math.random() *100)+1;
            console.log(randomNumber);
          }
        }
        //  Example 
        
        countdown(delayTime)
        
        
        //         Build a feature for Store's Inventory.(Question No. 3 )
        
        const store = {
        
          Pen : 2,
          Book : 5,
          Shoes : 70,
          Laptop : 800
        };
        
        const exchangeRate = 80;
        
        const convertedStore = Object.fromEntries(Object.entries(store).map(([item, price]) => [item, price*exchangeRate]))
        
        
        console.log(convertedStore);
        
        //                  Filtering and Capitalizing: Books Published After 2010 with Author Names.
        
        
        
        const books = [
          {tittle: `Book1`, author: `author1`, year: 2005},
          {tittle: `Book1`, author: `author1`, year: 2012},
          {tittle: `Book1`, author: `author1`, year: 2025},
          {tittle: `Book1`, author: `author1`, year: 2015},
          {tittle: `Book1`, author: `author1`, year: 2020}
        ]
        
        
        const filteredBooks = books.filter(book => book.year >= 2010).map(book => ({...book, author: book.author.toUpperCase()}) )
        
        
        console.log(filteredBooks)
        
        //       URL validation (Question No. 4)
        
        function validateURL(url){
         const pattern = /^https?:\/\/[\w\d\.\-]+.[\w]+$/;
         if(pattern.test(url)){
          console.log("The URL is valid.");
         }else{
          console.log("The URL is not valid.")
         }
        }
        
        
        // Testing the program with example
        
        validateURL("http://www.pwskills.com")
        validateURL('aaa://www.adarshSingh.com')
        
        
        
        
        
        //              LinkedIn Profile URL Validator.(Question No 5)
        
        function validateLinkedInURL(url){
          const pattern = /^https:\/\/www\.linkedin\.com\/in\/[\w\-]{5,30}[a-zA-Z\d]$/;
        
          if(pattern.test(url)){
            console.log("The LinkedIn profile URL is valid.")
          }else{
            console.log('The LinkedIn profile URL is not valid.')
          }
        }
        
        
        // Testing the program with example inputs
        
        validateLinkedInURL("https://www.linkedin.com/in/adarsh-singh-aa567a25b")
        
        validateLinkedInURL("https://www.linkedin.com/in/jane-doe123")