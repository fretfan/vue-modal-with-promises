export class ModalState {
  constructor(
    public message?: string,
    public yesCallBack: () => void = () => {},
    public isShown?: boolean
  ) {}
}
