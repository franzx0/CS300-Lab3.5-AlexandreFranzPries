// Week 3 Lab - File Processing Script
// Your Name
// Date

const fs = require('fs');

// Constants
const INPUT_FILE = 'books.json';
const OUTPUT_FILE = 'output.json';

function main() {
  try {
    // STEP 1: Get command-line arguments
    const filterType = process.argv[2];
    const filterValue = process.argv[3];
    
    // Check if we have both arguments
    if (!filterType || !filterValue) {
      // If either argument does not exist then we will print an error to the console
      console.log('\nError: Missing command-line arguments.');
      console.log('Usage: node processBooks.js <filterType> <filterValue>\n');
      console.log('Example:\n');
      console.log('  node processBooks.js genre Fiction\n');
      console.log('  node processBooks.js rating 4.5\n');
      process.exit(1);
    }
    
    // STEP 2: Read and parse the JSON file
    console.log('Reading books.json...');
    
    // Use fs.readFileSync() with 'utf8' encoding to read the file
    const fileContent = fs.readFileSync(INPUT_FILE, 'utf8');
    
    // Parse the JSON string into a JavaScript object
    const data = JSON.parse(fileContent);
    const books = data.books;
    
    console.log(`Loaded ${books.length} books\n`);
    
    // STEP 3: Filter the books based on criteria
    console.log(`Filtering by ${filterType}: ${filterValue}`);
    
    let filteredBooks = [];
    
    // Filter by genre (case-insensitive) or rating
    if (filterType.toLowerCase() === 'genre') {
      // Filter books where genre matches (case-insensitive comparison)
      filteredBooks = books.filter(book => 
        book.genre.toLowerCase() === filterValue.toLowerCase()
      );
    } else if (filterType.toLowerCase() === 'rating') {
      // Filter books where rating is greater than or equal to the specified value
      const minRating = parseFloat(filterValue);
      filteredBooks = books.filter(book => book.rating >= minRating);
    } else {
      console.log('\nError: Invalid filter type.');
      console.log('Valid filter types are: genre, rating\n');
      process.exit(1);
    }
    
    console.log(`Found ${filteredBooks.length} matching books\n`);
    
    // STEP 4: Create output object and write to file
    const output = {
      filterType: filterType,
      filterValue: filterValue,
      resultCount: filteredBooks.length,
      timestamp: new Date().toISOString(),
      results: filteredBooks
    };
    
    // Write to output.json with pretty formatting (2-space indentation)
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf8');
    
    console.log('Results written to output.json\n');
    console.log('Summary:');
    console.log(`- Total books processed: ${books.length}`);
    console.log(`- Books matching filter: ${filteredBooks.length}`);
    console.log(`- Output file: ${OUTPUT_FILE}`);
    
  } catch (error) {
    // Handle any errors
    console.log('\nError occurred:', error.message);
    process.exit(1);
  }
}

// Run the program
main();