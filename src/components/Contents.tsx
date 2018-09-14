import * as React from 'react'

export interface ContentsProps {
  text: string
}

export const Contents = (props: ContentsProps) => <h1>{props.text}</h1>
