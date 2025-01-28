# Solana Tweet Bot  

This bot automates token swaps on Solana by analyzing tweets from a specified user to identify bullish signals for Solana tokens. Built with seamless API integrations and blockchain capabilities, it performs the following key functions:

## 1. Fetch Tweets  
- Retrieves recent tweets from a given Twitter user via the RapidAPI Twitter API.  
- Filters tweets posted within the last minute to ensure real-time relevance.  

## 2. Token Detection  
- Leverages OpenAI APIs to analyze tweet content.  
- Extracts Solana token addresses if the tweet contains a bullish signal.  

## 3. Swap Execution  
- Uses Raydium APIs to initiate token swaps on the Solana blockchain.  
- Handles transaction generation, signing with the owner's private key, and blockchain confirmation.  

## 4. Environment Configuration  
- Securely manages API keys, RPC URL, and wallet credentials via environment variables.  
- Includes robust error handling and detailed logging for API calls and blockchain transactions.  
