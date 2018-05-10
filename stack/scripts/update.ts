import { CloudFormation } from "aws-sdk"
import { readFileSync } from "fs"

const {
  DOMAIN_NAME,
  FULL_DOMAIN_NAME,
  ACM_CERTIFICATE_ARN,
  STACK_NAME
} = process.env

const params: CloudFormation.Parameter[] = [
  { ParameterKey: "DomainName", ParameterValue: DOMAIN_NAME },
  { ParameterKey: "FullDomainName", ParameterValue: FULL_DOMAIN_NAME },
  { ParameterKey: "AcmCertificateArn", ParameterValue: ACM_CERTIFICATE_ARN }
]

new CloudFormation()
  .updateStack({
    TemplateBody: readFileSync("stack/template.yaml").toString(),
    StackName: STACK_NAME,
    Parameters: params
  })
  .promise()
  .then(response => console.log(`Stack updated with id=${response.StackId}`))
