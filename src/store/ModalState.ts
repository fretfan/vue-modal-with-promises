export class ModalState {
  constructor(
    public message?: string,
    public type?: string,
    public resolver?: (val: string | null) => void,
    public yesCallBack?: () => any
  ) {}
}
