import numpy as np
import pandas as pd
import csv


df = pd.read_csv('financial-choice-act-contributions.csv')

df['Contribution Amount'] = df['Contribution Amount'].str.replace(',', '')
df['Contribution Amount'] = df['Contribution Amount'].str.replace('$', '')
df['Contribution Amount'] = df['Contribution Amount'].str.replace(')', '')
df['Contribution Amount'] = df['Contribution Amount'].str.replace('(', '-').astype(float)
# df['Contribution Amount'].cast("double")

print(df.head(30))
df['Represents'] = df['Represents'].str.replace(' House district', '')

districts = np.unique(df['Represents'])

sums = df.groupby(['Represents', 'Interest Group Position'])['Contribution Amount'].sum()
# sums = df.groupby(['Represents']).groupby(['Interest Group Position'])['Contribution Amount'].sum()
print(sums)
