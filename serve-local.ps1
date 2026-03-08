<#
  Servidor local simples para testar o site estático via HTTP.
  Isso é necessário para recursos como service worker e prompt de instalação.
#>
param(
  [int]$Port = 4173
)

# Localiza o launcher do Python usado para subir um servidor estático leve.
$python = Get-Command py -ErrorAction SilentlyContinue

if (-not $python) {
  Write-Error "Python launcher 'py' nao foi encontrado. Instale o Python 3 para usar este servidor local."
  exit 1
}

# Mantém o servidor apontando para a pasta do projeto, independentemente do diretório atual.
Write-Host "ALFA local server running at http://127.0.0.1:$Port"
Write-Host "Press Ctrl+C to stop."

Set-Location $PSScriptRoot
& py -3 -m http.server $Port --bind 127.0.0.1
