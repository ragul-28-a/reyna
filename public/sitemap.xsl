<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Reyna India | XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #F8FAFC;
            color: #1E293B;
            margin: 0;
            padding: 0;
          }
          .header {
            background-color: #0F172A;
            color: #FFFFFF;
            padding: 2.5rem 2rem;
            text-align: center;
            border-bottom: 4px solid #F59E0B;
          }
          .header h1 {
            font-family: 'Outfit', sans-serif;
            margin: 0 0 0.5rem 0;
            font-size: 2rem;
          }
          .header p {
            color: #CBD5E1;
            margin: 0;
            font-size: 0.95rem;
          }
          .container {
            max-width: 1000px;
            margin: 2rem auto;
            padding: 0 1.5rem;
          }
          .card {
            background: #FFFFFF;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
            border: 1px solid #E2E8F0;
            overflow: hidden;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.9rem;
          }
          th {
            background-color: #1E293B;
            color: #F59E0B;
            text-align: left;
            padding: 1rem 1.25rem;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 0.8rem;
            letter-spacing: 0.5px;
          }
          td {
            padding: 1rem 1.25rem;
            border-bottom: 1px solid #E2E8F0;
          }
          tr:hover {
            background-color: #F1F5F9;
          }
          a {
            color: #0F172A;
            font-weight: 600;
            text-decoration: none;
          }
          a:hover {
            color: #F59E0B;
          }
          .priority {
            display: inline-block;
            padding: 0.2rem 0.6rem;
            border-radius: 9999px;
            background-color: rgba(245, 158, 11, 0.15);
            color: #D97706;
            font-weight: 700;
            font-size: 0.75rem;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Reyna India - XML Sitemap</h1>
          <p>This sitemap contains all indexed URLs for search engines and user navigation.</p>
        </div>
        <div class="container">
          <div class="card">
            <table>
              <thead>
                <tr>
                  <th>URL Location</th>
                  <th>Priority</th>
                  <th>Change Frequency</th>
                  <th>Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                    </td>
                    <td>
                      <span class="priority"><xsl:value-of select="sitemap:priority"/></span>
                    </td>
                    <td>
                      <xsl:value-of select="sitemap:changefreq"/>
                    </td>
                    <td>
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
