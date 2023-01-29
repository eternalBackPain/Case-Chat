# CaseChat
A question and answer chat-box for legal judgements

## The idea

GTP knows a lot of knowledge generally. For example, asking it to explain the case of Chan Yee Kin v Minister for Immigration & Ethnic Affairs (1989) 169 CLR 379 works great. 

However, there are two exceptions to its pre-training knowledge when asked about legal judgements:
1. Specific, less reported judgements fly under GTP's radar; and
2. knowledge is cut-off at 2021.

What CaseChat seeks to do is enable GTP to answer questions using a library of text as a reference - i.e using the text of a case as context for GTP to respond to. Essentially, I aim to further train the GTP model with legal judgements.

## Possible ways to do it

### Using embeddings

1. Preprocess the contextual information by splitting it into chunks and create an embedding vector for each chunk.
2. On receiving a query, embed the query in the same vector space as the context chunks and find the context embeddings which are most similar to the query.
3. Prepend the most relevant context embeddings to the query prompt.
4. Submit the question along with the most relevant context to GPT, and receive an answer which makes use of the provided contextual information.

See https://github.com/openai/openai-cookbook/blob/main/examples/Question_answering_using_embeddings.ipynb.


### By fine-tuning

https://beta.openai.com/docs/guides/fine-tuning;

1. prepare training data in the following JSONL format:
`{"prompt": "<prompt text>", "completion": "<ideal generated text>"}
{"prompt": "<prompt text>", "completion": "<ideal generated text>"}
{"prompt": "<prompt text>", "completion": "<ideal generated text>"}
...`
- use command line interface data prep tool (requires python): `openai tools fine_tunes.prepare_data -f <LOCAL_FILE>`
- See best practices: https://docs.google.com/document/d/1rqj7dkuvl7Byd5KQPUJRxc19BJt8wo0yHNwK84KfU3Q/edit#heading=h.u8zo10gc2kiq
2. Create fine tuned model:    `openai api fine_tunes.create -t <TRAIN_FILE_ID_OR_PATH> -m <BASE_MODEL>`

## Considerations

- Consider webscraping from Austlii OR just have a file upload option
- Consider how to group sections of context with semantically related headers (each numbered para as a section? each subheading?)

For now, this will this be an app where you upload a judgement for the chatbox to interpret.
