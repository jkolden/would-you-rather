//Would you rather file structure


{id: 27356,
 author: "john.kolden"
 //need a "has voted" but we will derive this from format question

}


//questions:

{parentId: 27356,
title: "Would you rather eat...",
 questionId: 1
 text: "Would you rather eat glass?"
 votes: ["dan_abramov", "tyler_mcgninnis"]
}


{parentId: 27356,
 questionId: 2
 text: "Would you rather eat hair?"
 votes: ["john.kolden"]
}

formattedQuestion = {
id: 27356
author: "john.kolden"
title: "Would you rather eat..."
questions: [{
 text: "Would you rather eat glass?"
 votes: ["dan_abramov", "tyler_mcgninnis"]
},
{
 text: "Would you rather eat hair?"
 votes: ["john.kolden"]
}]
}
