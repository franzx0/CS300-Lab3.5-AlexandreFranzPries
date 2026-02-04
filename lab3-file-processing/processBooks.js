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
    
    // TODO: Check if we have both arguments
   
    
    // STEP 2: Read and parse the JSON file
    console.log('Reading books.json...');
    // TODO: Use fs.readFileSync() with 'utf8' encoding
   
    
    // TODO: Parse the JSON
    
    
    console.log(`Loaded ${books.length} books\n`);
    
    // STEP 3: Filter the books based on criteria
    console.log(`Filtering by ${filterType}: ${filterValue}`);
    
    let filteredBooks = [];
    
     // TODO: Filter by genre (case-insensitive)
      
    
    console.log(`Found ${filteredBooks.length} matching books\n`);
    
    // STEP 4: Create output object and write to file
    const output = {
      filterType: filterType,
      filterValue: filterValue,
      resultCount: filteredBooks.length,
      timestamp: new Date().toISOString(),
      results: filteredBooks
    };
    
    // TODO: Write to output.json with pretty formatting
    
    
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