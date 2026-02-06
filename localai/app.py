"""Streamlit AI Chatbot App."""

import streamlit as st
from enjine import query_ollama

st.title("AI Chatbot App")

prompt = st.chat_input(
    "Say something about AI or ask a question!",
)
if prompt:
    with st.chat_message("user", avatar=None):
        st.markdown(prompt)
        user_input = prompt
        reply = query_ollama(user_input)
    with st.chat_message("ai", avatar=None): 
        st.markdown(reply)