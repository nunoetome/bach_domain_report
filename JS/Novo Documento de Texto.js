async function getWhoisInfo(domain) {
    const apiKey = 'at_G9aJkBkW8lzUUkJ3H3wPcKFIJwHtI'; // Substitua com sua chave de API do WhoisXMLAPI
    //const apiUrl = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${apiKey}&domainName=${domain}`;
  const apiUrl = 'https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_G9aJkBkW8lzUUkJ3H3wPcKFIJwHtI&domainName=myoptis.store'
  console.log(apiUrl)
    try {
      //const response = await fetch(apiUrl);
     // const data = await response.json();
      const response = await fetch(apiUrl);

     const data = response;
      console.log(response)
      // Retorne os dados, se necessário
      return data;
    } catch (error) {
      return error;
      //console.error('Erro ao obter informações de Whois:', error);
    }
  }
  
  // Loop over input items and add a new field
  // called 'myNewField' to the JSON of each one
  for (const item of $input.all()) {
    item.json.myNewField = 1;
    const domainName = 'myotis.store';
    item.json.domainName = domainName;
    const whosis_data = getWhoisInfo(domainName);
    item.json.whoisInfo = whosis_data;
  }
  
  return $input.all();