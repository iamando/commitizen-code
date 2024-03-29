import * as vscode from 'vscode'

/**
 * @param {vscode.Webview} webview
 * @param {vscode.Uri} extensionUri
 * @returns {object}
 */
function getStylesheetURI(
  webview: vscode.Webview,
  extensionUri: vscode.Uri
): {
  styleResetUri: vscode.Uri
  styleVSCodeUri: vscode.Uri
  styleMainUri: vscode.Uri
} {
  const styleResetUri = webview.asWebviewUri(
    vscode.Uri.joinPath(extensionUri, 'media', 'reset.css')
  )
  const styleVSCodeUri = webview.asWebviewUri(
    vscode.Uri.joinPath(extensionUri, 'media', 'vscode.css')
  )
  const styleMainUri = webview.asWebviewUri(
    vscode.Uri.joinPath(extensionUri, 'media', 'main.css')
  )

  return { styleResetUri, styleVSCodeUri, styleMainUri }
}

export { getStylesheetURI }
