#!/bin/bash

# Create virtual environment
python3 -m venv pivenv

# Activate virtual environment
source pivenv/bin/activate

# Install dependencies
pip install -r requirements.txt
