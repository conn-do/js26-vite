import { useState } from 'react'

import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'

export default function WishList() {
  const [items, setItems] = useState<{ name: string; bought: boolean }[]>([
    { name: '車', bought: false },
    { name: '原付き', bought: false },
  ])
  const [newItem, setNewItem] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('')

  return (
    <div>
      <h1>ほしいものリスト</h1>
      <Stack spacing={2}>
        <div>
          <TextField
            label='New Item'
            variant='standard'
            value={newItem}
            onChange={(e) => {
              setNewItem(e.target.value)
            }}
          />
          <Button
            variant='outlined'
            onClick={() =>
              setItems([{ name: newItem, bought: false }, ...items])
            }
          >
            追加
          </Button>
        </div>
        <div>
          <TextField
            label={
              <div>
                <SearchIcon />
                <span>検索</span>
              </div>
            }
            variant='standard'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {items
          .filter((value) => {
            if (searchQuery !== '') {
              return value.name.includes(searchQuery)
            }

            return true
          })
          .map((item) => (
            <Card key={item.name}>
              <CardContent>
                <div>{item.name}</div>
                <div>
                  <Button
                    disabled={item.bought}
                    onClick={() =>
                      setItems(
                        items.map((i) =>
                          i.name === item.name
                            ? { name: item.name, bought: true }
                            : i
                        )
                      )
                    }
                  >
                    {item.bought ? '購入済み' : '購入'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
      </Stack>
    </div>
  )
}
