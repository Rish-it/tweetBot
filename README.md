# tweetBot
This code implements a Solana-based bot that scans recent tweets from a specified Twitter user, identifies tweets related to bullish Solana token posts, and executes swaps for the mentioned tokens using the Raydium SDK. It performs the following functions:
Fetch Tweets: Retrieves recent tweets from a specified user via a RapidAPI Twitter API integration, filtering tweets within the last minute.
Token Extraction: Uses OpenAI APIs to analyze tweets and extract Solana token addresses if the tweet indicates a bullish signal.
Swap Execution: Initiates token swaps on Solana using Raydium APIs, handling transactions, signing them with the owner's private key, and confirming them on the blockchain.
Configuration: Uses environment variables for API keys, RPC URL, and wallet details. Supports error handling and logging for API interactions and blockchain transactions.
