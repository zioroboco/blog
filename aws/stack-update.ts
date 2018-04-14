import { CloudFormation } from "aws-sdk"
import { readFileSync } from "fs"

import config from "./config"

const cf = new CloudFormation({
  apiVersion: config.apiVersion,
  region: config.region
})

const params: CloudFormation.Parameter[] = [
  {
    ParameterKey: "DomainName",
    ParameterValue: config.domain
  },
  {
    ParameterKey: "FullDomainName",
    ParameterValue: config.domain
  },
  {
    ParameterKey: "AcmCertificateArn",
    ParameterValue: config.certificateArn
  }
]

cf.updateStack({
    StackName: config.stackName,
    TemplateBody: readFileSync(config.stackTemplate).toString(),
    Parameters: params
  })
  .promise()
  .then(response => console.log(`Stack updated with id=${response.StackId}`))
