// What will the following code output?

function hideReplies(topicId){

  let previewText;

  if(_isFixedTopic(topicId)){
    const TEXT_SEPARATOR = '%%';
    previewText = _fetchLongPreview(topicId, TEXT_SEPARATOR);
  }else{
    previewText = _fetchPreview(topicId);
  }

  console.log( TEXT_SEPARATOR );
}

hideReplies(42);

// ReferenceError

/*
%%
no output
ReferenceError
*/