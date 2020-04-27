import React from 'react'
import './App.css'

import { Map, Set } from "immutable"
import { wait, Fun, fromJSX, Widget, stateful, Action, any, mkWidget, number, AsyncState, unloadedAsyncState, loadingAsyncState, HttpResult, async, nothing } from "widgets-for-react"
import { Entity, setter, Updater } from "ts-lenses"
import { FontWeights } from '@uifabric/styling';
import { Stack, Text, PrimaryButton, DocumentCard, DocumentCardPreview, DocumentCardTitle, DocumentCardActivity, ITextStyles, IIconStyles, IButtonStyles, IStackTokens, Persona, Icon, ActionButton, IStackStyles } from '@fluentui/react/lib'
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import { setRTL } from '@fluentui/react/lib/Utilities'

// setRTL(true)


interface AppState {}

const ctaStyles: IStackStyles = {
  root: {
    margin: "2em"
  },
};
const descriptionTextStyles: ITextStyles = {
  root: {
    color: "#333",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: FontWeights.semilight,
    fontFamily:"Barlow,Arial,sans-serif"
  },
};
const titleTextStyles: ITextStyles = {
  root: {
    color: "#001f60",
    textAlign: "center",
    fontWeight: FontWeights.light,
    fontSize: "25px",
    marginBottom: ".25em",
    fontFamily: "Graphik,Arial,sans-serif"
  },
};
const actionButtonStyles: IButtonStyles = {
  root: {
    border: 'none',
    backgroundColor: '#009cde',
    fontFamily: "Graphik,Arial,sans-serif",
    fontSize:"14px",
    letterSpacing: "1px",
    borderRadius:0,
    fontWeight: 500,
    lineHeight: 1.33,
    color: "white",
    height: 'auto',
    minHeight: 0,
    minWidth: 0,
    padding: 13,
    margin: 5,
  },
  textContainer: {
    fontSize: 12,
    fontWeight: FontWeights.semibold,
  },
};

const sectionStackTokens: IStackTokens = { childrenGap: 30 };

const App = () : JSX.Element =>
  stateful<AppState>()(s0 => 
    any<Action<AppState>>()([
      fromJSX(_ => 
      <Stack horizontalAlign={"center"} tokens={sectionStackTokens} styles={ctaStyles}>
        <Text variant="large" styles={titleTextStyles}>
          De gevolgen van het coronavirus voor onze dienstverlening
        </Text>

        <Text variant="small" styles={descriptionTextStyles}>
          Merford treft maatregelen om de verspreiding van het coronavirus tegen te gaan. Dit kan gevolgen hebben voor de samenwerking met onze klanten en leveranciers.
        </Text>
        <Stack horizontal >
          <PrimaryButton text="Lees verder" styles={actionButtonStyles} />
          {/* <ActionButton text="Whatever" styles={actionButtonStyles} /> */}
        </Stack>
      </Stack>        
      )
    ]).map(updater => updater(s0))
  )("good")
  .run(state => {})

export default App;
