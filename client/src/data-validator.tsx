import addFormats, { FormatName, FormatOptions } from "ajv-formats";
import Ajv, { ErrorObject, JSONSchemaType, ValidateFunction } from "ajv";

class DataValidator<T> {
  private ajv: Ajv;
  private validate: ValidateFunction<T>;

  constructor(private schema: JSONSchemaType<T>) {
    this.ajv = new Ajv();

    const formatNames: FormatName[] = ["email", "uri"];
    const formatsPluginOptions: FormatOptions = {
      mode: "fast",
      formats: formatNames,
    };

    addFormats(this.ajv, formatsPluginOptions);
    this.validate = this.ajv.compile(schema);
  }

  public validateData(data: unknown): data is T {
    const isValid = this.validate(data) as boolean;
    return isValid;
  }

  public getErrors(): ErrorObject[] | null | undefined {
    return this.validate.errors;
  }
}

export default DataValidator;
