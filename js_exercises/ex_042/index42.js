var text1, text2

text1 = " Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline.\n The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in\n a worldwide virtual reality game, the discovery of which will lead him to inherit the game creator's fortune.\n Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)].\n The book was published on August 16, 2011.\n An audiobook was released the same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20 \n In 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award. \n"
text2 = "\n Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)].\n The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton,\n who was mentioned briefly in one of the chapters.Ch. 20\n In 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award."

char = text1 + text2

console.log(text1.toUpperCase() + text2.toLowerCase() + '\n');
console.log(`The message has ${char.length} characters.`);