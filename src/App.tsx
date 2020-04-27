import React from 'react'
import './App.css'

import { Map, Set } from "immutable"
import { wait, Fun, fromJSX, Widget, stateful, Action, any, mkWidget, number, AsyncState, unloadedAsyncState, loadingAsyncState, HttpResult, async, nothing } from "widgets-for-react"
import { Entity, setter, Updater } from "ts-lenses"
import { FontWeights } from '@uifabric/styling';
import { Stack, Text, PrimaryButton, DocumentCard, DocumentCardPreview, DocumentCardTitle, DocumentCardActivity, ITextStyles, IIconStyles, IButtonStyles, IStackTokens, Persona, Icon, ActionButton, IStackStyles, Image, ImageFit, Label, Alignment } from '@fluentui/react/lib'
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import { setRTL } from '@fluentui/react/lib/Utilities'

// setRTL(true)


interface AppState { }

const ctaStyles: IStackStyles = {
  root: {
    margin: "2em"
  },
};
const descriptionTextStyles = (textAlign : string) : ITextStyles => ({
  root: {
    color: "#333",
    textAlign,
    fontSize: "16px",
    fontWeight: FontWeights.semilight,
    fontFamily: "Barlow,Arial,sans-serif"
  },
});
const titleTextStyles = (textAlign : string) : ITextStyles => ({
  root: {
    color: "#001f60",
    textAlign,
    fontWeight: FontWeights.light,
    fontSize: "25px",
    marginBottom: ".25em",
    fontFamily: "Graphik,Arial,sans-serif"
  },
});
const actionButtonStyles: IButtonStyles = {
  root: {
    border: 'none',
    backgroundColor: '#009cde',
    fontFamily: "Graphik,Arial,sans-serif",
    fontSize: "14px",
    letterSpacing: "1px",
    borderRadius: 0,
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

const CTAbody = (textAlign:Alignment) : JSX.Element => (
  <Stack horizontalAlign={textAlign} tokens={sectionStackTokens} styles={ctaStyles}>
    <Text variant="large" styles={titleTextStyles(textAlign)}>
      De gevolgen van het coronavirus voor onze dienstverlening
    </Text>
    <Text variant="small" styles={descriptionTextStyles(textAlign)}>
        Merford treft maatregelen om de verspreiding van het coronavirus tegen te gaan. Dit kan gevolgen hebben voor de samenwerking met onze klanten en leveranciers.
    </Text>
    <PrimaryButton text="Lees verder" styles={actionButtonStyles} />
  </Stack>
)

const CTAbodyWithImage = () : JSX.Element => (
  <Stack horizontal horizontalAlign="center">
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm6">
        {CTAbody("start")}
      </div>
      <div className="ms-Grid-col ms-sm6" style={{height:"100%", display:"flex"}}>
        <Stack gap="5" grow={1}>
          <Image 
            style={{objectFit:"cover"}}
            width="100%"
            height="100%"
            src="http://placehold.it/1000x500"
            alt="Some text"
          />
        </Stack>
      </div>
    </div>
  </Stack>
)

const responsive = (large:JSX.Element, small:JSX.Element) =>
  <div className="ms-Grid" dir="ltr">
  <div className="ms-Grid-row">
    <div className="ms-Grid ms-sm12 ms-hiddenLgUp">
      {small}
    </div>
    <div className="ms-Grid ms-sm12 ms-hiddenMdDown">
      {large}
    </div>
  </div>
  </div>


const App = (): JSX.Element =>
  stateful<AppState>()(s0 =>
    any<Action<AppState>>()([
      fromJSX(_ =>
        responsive(CTAbodyWithImage(), CTAbody("center"))
      )
    ]).map(updater => updater(s0))
  )("good")
    .run(state => { })

export default App;
