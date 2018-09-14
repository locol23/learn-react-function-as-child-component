import * as React from 'react'
import styled from 'styled-components'

import { AppStateChildrenProps, AppStateContainer } from './AppStateContainer'
import { Contents } from './Contents'

export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <AppStateContainer>
        {(props: AppStateChildrenProps) => (
          <Container>
            <Contents text={props.text} />
          </Container>
        )}
      </AppStateContainer>
    )
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`
