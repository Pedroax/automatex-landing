# 🔍 Comandos para Executar no Servidor Hostinger

Execute esses comandos no Terminal do VPS para encontrar o projeto:

## 1️⃣ Ver configuração do Nginx (onde está o site)
```bash
cat /etc/nginx/sites-available/automatex
```

## 2️⃣ Ver processos PM2 (gerenciador de processos Node.js)
```bash
pm2 list
```

## 3️⃣ Procurar por projetos Next.js no sistema
```bash
find /var/www /home /opt -name "next.config.js" -type f 2>/dev/null
```

## 4️⃣ Ver logs do PM2 (se tiver)
```bash
pm2 logs --lines 50
```

## 5️⃣ Procurar por pastas 'site' ou 'automatex' em locais comuns
```bash
ls -la /var/www/ 2>/dev/null
ls -la /home/ 2>/dev/null
ls -la /opt/ 2>/dev/null
```

---

**Execute esses 5 comandos e me mostre o resultado!** 🔍

Especialmente o primeiro comando (`cat /etc/nginx/sites-available/automatex`) vai mostrar onde o site está hospedado!
