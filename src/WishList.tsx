import { useState } from 'react'

import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'

export default function WishList() {
  const [items, setItems] = useState<
    {
      name: string
      purchased: boolean
    }[]
  >([
    {
      name: '車',
      purchased: false,
    },
    {
      name: '家',
      purchased: false,
    },
  ])
  const [newItem, setNewItem] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div>
      <h1>欲しいものリスト</h1>
      <Stack spacing={2}>
        <div>
          <TextField
            label='New item'
            value={newItem}
            onChange={(event) => {
              setNewItem(event.target.value)
            }}
          />
          <Button
            variant='outlined'
            onClick={() => {
              setItems([
                {
                  name: newItem,
                  purchased: false,
                },
                ...items,
              ])
              setNewItem('')
            }}
          >
            追加
          </Button>
        </div>
        <div>
          <TextField
            label={
              <>
                <SearchIcon /> 検索
              </>
            }
            value={searchQuery}
            onChange={(event) => {
              setSearchQuery(event.target.value)
            }}
          />
        </div>
        {items
          .filter(({ name }) => {
            if (searchQuery === '') {
              return true
            }

            return name.includes(searchQuery)
          })
          .map(({ name, purchased }) => (
            <Card key={name}>
              <CardContent>
                <p>{name}</p>
                <Button
                  disabled={purchased}
                  onClick={() => {
                    setItems(
                      items.map((item) => {
                        if (item.name === name) {
                          return {
                            ...item,
                            purchased: true,
                          }
                        }

                        return item
                      })
                    )
                  }}
                >
                  {purchased ? '購入済み' : '購入'}
                </Button>
              </CardContent>
            </Card>
          ))}
      </Stack>
    </div>
  )
}
