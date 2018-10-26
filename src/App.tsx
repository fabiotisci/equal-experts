import * as React from 'react';

import { IButton } from './model';
import { Header, Button, Input } from './components';
import { interafaceButtons, calculate, updateDisplay } from './utils/';
import './App.css';

interface IAppState {
  previousValue: string;
  currentValue: string;
  operator: string;
}

export class App extends React.PureComponent<{}, IAppState, {}> {

  constructor(props: any) {
    super(props);
    this.state = {
      previousValue: '0',  
      currentValue: '0',
      operator: ''
    };
  }


  public renderButtons(buttons: IButton[]) {
    return buttons.map( ( button, index ) => (
        <Button
          key={index}
          tabIndex={index}
          clicked={ () => this.handleClick(button) }
          classes={button.classes}>{button.label}</Button>
    )
  )}

  public handleClick(button: IButton) {
    switch(button.type){
      case 'DELETE':
        this.deleteOneDigit();
        break;
      case 'CLEAR':
        this.clearValue();
        break;
      case 'VALUE':
        this.updateCurrentValue(button.label);
        break;
      case 'OPERATOR':
        this.addOperatorAndCleanValue(button.label);
        break;
      case 'EQUALS':
        this.showResult();
        break;
    }
  }

  public updateCurrentValue(value: string): void {
    this.setState({
      currentValue: updateDisplay(value, this.state.currentValue)
    })
  }

  public addOperatorAndCleanValue(operator: string): void {
    this.setState({
      previousValue: this.state.previousValue !== '0' ?
        calculate(this.state.previousValue, this.state.currentValue, operator) : this.state.currentValue,
      currentValue: this.state.previousValue !== '0' ?
      calculate(this.state.previousValue, this.state.currentValue, operator) : '0',
      operator
    })

  }

  public showResult(): void {
    this.setState({
      previousValue: '0',
      currentValue: calculate(this.state.previousValue, this.state.currentValue, this.state.operator),
      operator: ''
    })

  }

  public clearValue(): void {
    this.setState({
      currentValue: '0',
      previousValue: '0'
    })
  }

  public deleteOneDigit(): void {
    this.setState({
      currentValue: this.state.currentValue.length > 1 ? this.state.currentValue.slice(0, -1) : '0'
    })
  }

  public render() {
    return (
      <div className="App">
        <Header />
        <Input value={this.state.currentValue}/>
        {this.renderButtons(interafaceButtons)}
        <div style={{clear: 'both'}} />
      </div>
    );
  }
}