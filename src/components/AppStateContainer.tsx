import * as React from 'react'

interface AppState {
  text: string
}

interface Handlers {
  setText: (t: string) => void
}

export type AppStateChildrenProps = AppState & Handlers

interface AppStateProps {
  children: (props: AppStateChildrenProps) => React.ReactNode
}

export class AppStateContainer extends React.Component<
  AppStateProps,
  AppState
> {
  public state = {
    text: '',
  }
  public setText(t: string) {
    this.setState({ text: t })
  }
  public componentDidMount() {
    this.setText('Hello React')
  }
  public render() {
    return this.props.children({
      setText: this.setText,
      text: this.state.text,
    })
  }
}
